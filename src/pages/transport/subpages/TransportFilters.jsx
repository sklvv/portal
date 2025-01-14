import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../../hook/useAuth";
import {
	ButtonGroup,
	IconButton,
	InputAdornment,
	Tooltip,
	Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import CarRentalIcon from "@mui/icons-material/CarRental";
import { GTextField } from "../../../elements/CustomMui/customMui";
import { useTheme } from "../../../hook/useTheme";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { setTransportList } from "../TransportSlice";
import { useGetTransport } from "../../../hook/useGetTransport";
import "../transport.scss";
import { searchInArray } from "../../../utils/searchInArray";
import { setPhoneBookList } from "../../PhoneBook/PhoneBookSlice";

const TransportFilters = ({ updateItem }) => {
	const dispatch = useDispatch();
	const { data: transport } = useGetTransport();
	const { user } = useAuth();
	/*Поиск*/
	const [search, setSearch] = useState("");
	/*Очистка поля поиска*/
	const resetSearch = () => {
		setSearch("");
		dispatch(setTransportList(transport));
	};
	/*Обновление поля поиска*/
	const handleSearch = e => {
		e.preventDefault();
		setSearch(e.target.value);
	};
	/*ф-я поиска*/
	const handleKeyDown = e => {
		if (e.key === "Backspace" || e.key === "Delete") {
			dispatch(setTransportList(transport));
		}
		if (e.key === "Enter" && search.length > 2) {
			const keysToSearch = ["name", "car", "carmodel", "number", "phone"];
			const searchedData = searchInArray(transport, search, keysToSearch);
			dispatch(setTransportList(searchedData));
		}
	};

	return (
		<div className="filters">
			<ButtonGroup
				variant="outlined"
				size="small"
				sx={{ verticalAlign: "bottom" }}
			>
				{user && (
					<Tooltip
						title={
							<Typography variant="body2" gutterBottom>
								Добавить номер пользователя
							</Typography>
						}
					>
						<Button onClick={updateItem} color={"success"}>
							<CarRentalIcon /> Добавить
						</Button>
					</Tooltip>
				)}
			</ButtonGroup>
			<div className="searchFilter">
				<GTextField
					id="realiz_search"
					sx={{
						pt: "15px",
						width: "300px",
						pr: "15px",
						color: useTheme("text"),
					}}
					variant="standard"
					placeholder="Поиск"
					value={search}
					onKeyDown={handleKeyDown}
					onChange={handleSearch}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon sx={{ color: useTheme("text") }} />
							</InputAdornment>
						),
						endAdornment: (
							<InputAdornment position="end">
								<IconButton onClick={resetSearch}>
									<CloseIcon sx={{ color: useTheme("text") }} />
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
			</div>
		</div>
	);
};

export default TransportFilters;
