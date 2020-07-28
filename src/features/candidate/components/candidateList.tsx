import React from 'react';
import GridHeader from 'shared/ui/grid/gridHeader';
import { Table, TableBody, TableCell, TableHead, TableRow, TablePagination } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import genericClasses from 'App.module.css';
import Paper from '@material-ui/core/Paper';
import Pagination from 'shared/ui/pagination/pagination';
import IconButton from 'shared/ui/iconButton/iconButton';
import DelButGrid from 'shared/ui/grid/delButGrid';
import { IPaging } from '../../../shared/interface/interfaces';
import { ICandidate } from '../interface/candidate.interface';
import EmptyScreen from 'shared/ui/emptyScreen/emptyScreen';
import classes from '../Candidate.module.css';
import Button from '@material-ui/core/Button';

interface IProps {
	candidates: ICandidate[];
	paging: IPaging;
	totalCount: number;
	onAdd: () => void;
	onHoldCandidate: (candidateId: number) => void;
	onEdit: (candidate: ICandidate) => void;
	onConfirmDelete: (candidate: ICandidate) => void;
	onPageChange: (limit: number, page: number) => void;
}

class CandidateList extends React.Component<IProps, {}> {
	render() {
		console.log(this.props.candidates);
		return (
			<>
				<GridHeader title="Candidate List" handleBtnClick={() => {}} />
				<Grid container justify="center">
					<Grid item xs={12} className={genericClasses.Mt8}>
						<Paper className={classes.CandidateGridHeight}>
							<Table>
								<TableHead>
									<TableRow>
										<TableCell>Sr No</TableCell>
										<TableCell>Sid</TableCell>
										<TableCell>Name</TableCell>
										<TableCell>Seat No.</TableCell>
										<TableCell align="right">Actions</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>{this.getTableRows()}</TableBody>
							</Table>
							{this.getEmptyScreen()}
						</Paper>
						<Table>
							<TableBody>
								<TableRow>
									<TablePagination
										colSpan={3}
										count={this.props.totalCount}
										rowsPerPage={this.props.paging.rowPerPage}
										page={this.props.paging.page}
										onChangePage={this.handleChangePage}
										ActionsComponent={Pagination as any}
										rowsPerPageOptions={[]}
									/>
								</TableRow>
							</TableBody>
						</Table>
					</Grid>
				</Grid>
			</>
		);
	}

	getTableRows = () => {
		const data = this.props.candidates.map((candidate, index) => {
			return (
				<TableRow key={index}>
					<TableCell>{index + 1 + this.props.paging.page * this.props.paging.rowPerPage}</TableCell>
					<TableCell>{candidate.sidno}</TableCell>
					<TableCell>{candidate.name}</TableCell>
					<TableCell>{candidate.seat_no}</TableCell>
					<TableCell align="right">
						<Button
							onClick={() => this.props.onHoldCandidate(candidate.id)}
							variant="contained"
							color={candidate.is_hold ? 'secondary' : 'primary'}
						>
							{candidate.is_hold ? 'Release' : 'Hold'}
						</Button>
						{/* <IconButton
							iconType="edit"
							fontSize="small"
							areaLabel="Delete"
							onIconClick={() => this.onClickEdit(candidate)}
						/>
						<DelButGrid
							title="Candidate"
							module={candidate.name}
							onConfirmDelete={() => this.props.onConfirmDelete(candidate)}
						/> */}
					</TableCell>
				</TableRow>
			);
		});
		if (data.length === 0) return <TableRow />;
		return data;
	};

	getEmptyScreen = () => {
		return this.props.candidates.length === 0 ? <EmptyScreen emptyText="No Candidates available !" /> : '';
	};

	onClickAdd = () => {
		this.props.onAdd();
	};

	onClickEdit = (candidate: ICandidate) => {
		this.props.onEdit(candidate);
	};

	handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, page: number): void => {
		this.props.onPageChange(this.props.paging.rowPerPage, page);
	};
}

export default CandidateList;
