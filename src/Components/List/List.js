import React from "react";
import "./List.css";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      currencies: [],
      error: null,
    };
  }
  CompletChange = (id) => {
    console.log(id);

    this.setState((prevState) => {
      const a = prevState.currencies.map((item) => {
        if (id === item.id) {
          item.completed = !item.completed;
        }
        return item;
      });
      console.log(a);

      return {
        currencies: a,
      };
    });
  };

  componentDidMount() {
    this.setState({
      loading: true,
    });
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) =>
        this.setState((prevState) => {
          return {
            currencies: json,
            loading: !prevState.loading,
          };
        })
      );
  }

  render() {
    console.log("render");

    const { loading, currencies } = this.state;
    //const { userId, id, title, completed } = currencies;
    if (loading) {
      return <div>Loading...</div>;
    }
    const compTru = currencies.map((item) => {
      if (item.completed) {
        return (
          <li
            key={item.id}
            onClick={(e) => {
              this.CompletChange(item.id);
            }}
          >
            <p>{item.title}</p>
            <input type="checkbox" checked={item.completed} />
          </li>
        );
      }
    });
    const compFal = currencies.map((item) => {
      if (!item.completed) {
        return (
          <li
            key={item.id}
            onClick={(e) => {
              this.CompletChange(item.id);
            }}
          >
            <p>{item.title}</p>
            <input type="checkbox" checked={item.completed} />
          </li>
        );
      }
    });
    return (
      <div className="comp">
        <ul>
          <li>Completed</li>
          {compTru}
        </ul>
        <ul>
          <li>No completed</li>
          {compFal}
        </ul>
      </div>
    );
  }
}
export default List;
