import React from "react";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      currencies: [],
      error: null,
    };
  }
  componentDidMount() {
    this.setState({
      loading: true,
    });
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }
    return <div>List</div>;
  }
}
export default List;
