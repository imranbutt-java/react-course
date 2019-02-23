import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import { paginate } from "./utils/paginate";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" }
  };

  // This function called when instance of this component is rendered in the DOM
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genre" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
    // deleteMovie(movie._id);
    // this.setState({ movies: getMovies() });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenresSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  // Now this sort implementation belongs to MovieTable
  handleSort = sortColumn => {
    // const sortColumn = { ...this.state.sortColumn };
    // if (sortColumn.path === path) {
    //   sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    // } else {
    //   sortColumn.path = path;
    //   sortColumn.order = "asc";
    // }
    // console.log(sortColumn);
    // const order = path === this.state.sortColumn.path ? "desc" : "asc";
    this.setState({ sortColumn });
  };

  render() {
    const { length: moviesCount } = this.state.movies;
    const {
      currentPage,
      pageSize,
      sortColumn,
      selectedGenre,
      movies: allMovies
    } = this.state;
    if (moviesCount === 0) return <p>There are no movies in the database.</p>;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);

    // Here we have 2 components with Abstraction like ListGroup and Pagination but the table is
    // in detail level. So we lost the symetry
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            // textProperty="name"
            // valueProperty="_id"
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenresSelect}
          />
        </div>
        <div className="col">
          <p>Showing {filtered.length} movies in the database</p>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
