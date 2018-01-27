import React from "react";
import ReactDOM from "react-dom";
import { Input, Container, Table, Button } from 'semantic-ui-react'
class SetCalculator extends React.Component {
	constructor() {
		super();
		this.state = {
			weight: 0,
			week: "5",
		}
		this.weightInput = null;
		this.weekInput = null;
	}
	getCalcs(week) {
		let percentages = [];
		let sets = [];
		switch (week) {
			case "5":
				percentages = [0.4, 0.5, 0.6, 0.65, 0.75, 0.85]
				sets = [5, 5, 3, 5, 5, "5+"]
				break;
			case "3":
				percentages = [0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
				sets = [5, 5, 3, 3, 3, "3+"]
				break;
			case "1":
				percentages = [0.4, 0.5, 0.6, 0.85, 0.925, 1]
				sets = [5, 5, 3, 5, 3, "1+"]
				break;
			case "D":
				percentages = [0.4, 0.5, 0.6]
				sets = [5, 5, 5]
				break;
			default:
				break;
		}
		return { percentages, sets }
	}
	round5(val) {
		return Math.ceil(val / 5) * 5;
	}
	onChange(e) {
		this.setState({
			weight: this.weightInput.inputRef.value
		})
	}
	calcPlates(totalWeight) {
		const plates = [
			{ weight: 45, count: 8 },
			{ weight: 35, count: 4 },
			{ weight: 25, count: 4 },
			{ weight: 10, count: 4 },
			{ weight: 5, count: 4 },
			{ weight: 2.5, count: 4 },
			{ weight: 1.25, count: 4 },
			{ weight: 0.5, count: 8 }
		]
		const bar = 45;
		if(totalWeight <= bar){
			return ['no plates']
		}
		let oneSide = (totalWeight - bar) / 2
		const result = [];
		for (let i = 0; i < plates.length; i++) {
			const plate = plates[i];
			if (oneSide < plate.weight) {
				continue;
			} else {
				let count = 0
				let available = plate.count;
				while (count < Math.floor(oneSide / plate.weight)) {
					count++
					result.push(plate.weight);
				}
				oneSide = oneSide % plate.weight;
			}
		};
		return `[${result.join(', ')}]`;
	}
	render() {
		const { percentages, sets } = this.getCalcs(this.state.week);
		return (
			<Container>
				<Input onChange={this.onChange.bind(this)} ref={el => this.weightInput = el} placeholder='training max' />
				<Button.Group>
					<Button active={this.state.week === '5'} onClick={() => this.setState({week: "5"})}>Five</Button>
					<Button active={this.state.week === '3'} onClick={() => this.setState({week: "3"})}>Three</Button>
					<Button active={this.state.week === '1'} onClick={() => this.setState({week: "1"})}>One</Button>
					<Button active={this.state.week === 'D'} onClick={() => this.setState({week: "D"})}>Deload</Button>
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
								{percentages.map((p, i) => {
									const w = this.round5(this.state.weight * p);
									return (
										<Table.Row key={i}>
											<Table.Cell>{w}</Table.Cell>
											<Table.Cell>{sets[i]}</Table.Cell>
											<Table.Cell>{this.calcPlates(w)}</Table.Cell>
										</Table.Row>
									)
								})}
							</Table.Body>
						</Table>
					</div>
				): null}
			</Container>
		);
	}
}

ReactDOM.render(<SetCalculator />, document.getElementById('app'));