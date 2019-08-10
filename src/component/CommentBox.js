import React from "react";
import { connect } from "react-redux";
import * as action from "../action";
import requireAuth from "./requireAuth";

class CommentBox extends React.Component {
  state = { comment: "" };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({ comment: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea
            onChange={this.handleChange}
            value={this.state.comment}
          />
          <div />
          <button>Submit Comment</button>
        </form>
        <button
          className="fetch-comments"
          onClick={this.props.fetchComments}
        >
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  action
)(requireAuth(CommentBox));
