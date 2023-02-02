import React from "react";
import { createRoot } from "react-dom/client";
import { Input, Container, Table, Button } from "semantic-ui-react";
import { sets } from "./calc";

const SetCalculator = () => {
  const [weight, setWeight] = React.useState(0);
  const [week, setWeek] = React.useState("5");
  const weightInput = React.useRef(null);
  const onChange = (e) => {
    setWeight(weightInput.current.inputRef.value);
  };
  return (
    <Container>
      <Input onChange={onChange} ref={weightInput} placeholder="training max" />
      <Button.Group>
        <Button active={week === "5"} onClick={() => setWeek("5")}>
          Week 1
        </Button>
        <Button active={week === "3"} onClick={() => setWeek("3")}>
          Week 2
        </Button>
        <Button active={week === "1"} onClick={() => setWeek("1")}>
          Week 3
        </Button>
        <Button active={week === "D"} onClick={() => setWeek("D")}>
          Deload
        </Button>
      </Button.Group>
      {weight ? (
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
              {sets(weight, week).map((set, i) => (
                <Table.Row key={i}>
                  <Table.Cell>{set.weight}</Table.Cell>
                  <Table.Cell>{set.reps}</Table.Cell>
                  <Table.Cell>{set.plates.join(", ")}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      ) : null}
    </Container>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<SetCalculator />);
