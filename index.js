import React from "react";
import ReactDOM from "react-dom";
import { Input, Container, Table, Button } from "semantic-ui-react";
import { sets } from "./calc";
class SetCalculator extends React.Component {
  constructor() {
    super();
    this.state = {
      weight: 0,
      week: "5",
    };
    this.weightInput = null;
    this.weekInput = null;
  }
  onChange(e) {
    this.setState({
      weight: this.weightInput.inputRef.value,
    });
  }
  render() {
    return (
      <Container>
        <Input
          onChange={this.onChange.bind(this)}
          ref={(el) => (this.weightInput = el)}
          placeholder="training max"
        />
        <Button.Group>
          <Button
            active={this.state.week === "5"}
            onClick={() => this.setState({ week: "5" })}
          >
            Week 1
          </Button>
          <Button
            active={this.state.week === "3"}
            onClick={() => this.setState({ week: "3" })}
          >
            Week 2
          </Button>
          <Button
            active={this.state.week === "1"}
            onClick={() => this.setState({ week: "1" })}
          >
            Week 3
          </Button>
          <Button
            active={this.state.week === "D"}
            onClick={() => this.setState({ week: "D" })}
          >
            Deload
          </Button>
        </Button.Group>
        {this.state.weight ? (
          <div>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Weight</Table.HeaderCell>
                  <Table.HeaderCell>Reps</Table.HeaderCell>
                  <Table.HeaderCell>Plates</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {sets(this.state.weight, this.state.week).map(
                  ({ weight, reps, plates }, i) => {
                    return (
                      <Table.Row key={i}>
                        <Table.Cell>{weight}</Table.Cell>
                        <Table.Cell>{reps}</Table.Cell>
                        <Table.Cell>[{plates.join(", ")}]</Table.Cell>
                      </Table.Row>
                    );
                  }
                )}
              </Table.Body>
            </Table>
          </div>
        ) : null}
      </Container>
    );
  }
}

ReactDOM.render(<SetCalculator />, document.getElementById("app"));
