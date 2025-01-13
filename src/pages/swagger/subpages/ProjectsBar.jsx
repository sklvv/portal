import React, { useEffect, useState } from "react";
import {
	IconButton,
	InputAdornment,
	List,
	ListItemText,
	Divider,
	Box,
	ListItemButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { GTextField } from "../../../elements/CustomMui/customMui";
import { ArrowDropDown } from "@mui/icons-material";
import { useTheme } from "../../../hook/useTheme";
import { useDispatch, useSelector } from "react-redux";
import {
	setProjectsArr,
	setSelectedProjectId,
	setSelectedRequestId,
} from "../swagger.slice";
const MOCK_PROJECTS = [
	{
		id: "project1",
		name: "Project Alpha",
		requests: [
			{
				id: "request1",
				projectId: "project1",
				name: "GetUsers",
				url: "/api/users",
				type: "GET",
				description: "Retrieve a list of users",
				params: [
					{ name: "page", description: "Page number for pagination" },
					{ name: "limit", description: "Number of items per page" },
				],
				output: "List of users in JSON format",
			},
			{
				id: "request2",
				projectId: "project1",
				name: "CreateUser",
				url: "/api/users",
				type: "POST",
				description: "Create a new user",
				body: JSON.stringify({ name: "string", email: "string" }),
				output: "Created user object in JSON format",
			},
		],
	},
	{
		id: "project2",
		name: "Project Beta",
		requests: [
			{
				id: "request3",
				projectId: "project2",
				name: "GetProducts",
				url: "/api/products",
				type: "GET",
				description: "Retrieve a list of products",
				params: [
					{ name: "category", description: "Category filter for products" },
				],
				output: "List of products in JSON format",
			},
			{
				id: "request4",
				projectId: "project2",
				name: "DeleteProduct",
				url: "/api/products/{id}",
				type: "DELETE",
				description: "Delete a product by its ID",
				params: [{ name: "id", description: "ID of the product to delete" }],
				output: "Confirmation message",
			},
		],
	},
];

const ProjectsSearch = () => {
	/*Поиск*/
	const [search, setSearch] = useState("");
	/*Очистка поля поиска*/
	const resetSearch = () => {
		setSearch("");
		// dispatch(setTransportList(transport));
	};
	/*Обновление поля поиска*/
	const handleSearch = e => {
		e.preventDefault();
		setSearch(e.target.value);
	};
	/*ф-я поиска*/
	const handleKeyDown = e => {
		if (e.key === "Backspace" || e.key === "Delete") {
			// dispatch(setTransportList(transport));
		}
		if (e.key === "Enter" && search.length > 2) {
			// dispatch(setTransportList(searchedData));
		}
	};

	return (
		<GTextField
			sx={{
				width: "250px",
				color: useTheme("text"),
				"& .MuiInput-root": { color: useTheme("text") },
			}}
			variant="standard"
			placeholder="Поиск по запросам"
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
	);
};

const ProjectsListItem = ({ id, name, requests }) => {
	const [isOpenDropdown, setIsOpenDropdown] = useState(false);
	const dispatch = useDispatch();
	return (
		<div key={id}>
			<ListItemButton onClick={() => setIsOpenDropdown(!isOpenDropdown)}>
				<ListItemText primary={name} />
				<ArrowDropDown />
			</ListItemButton>
			{isOpenDropdown && (
				<List component="div" disablePadding>
					{requests.map(request => (
						<ListItemButton
							key={request.id}
							sx={{ pl: 4 }}
							onClick={() => {
								dispatch(setSelectedRequestId(request.id));
								dispatch(setSelectedProjectId(id));
							}}
						>
							<ListItemText primary={request.name} secondary={request.type} />
						</ListItemButton>
					))}
				</List>
			)}
			<Divider />
		</div>
	);
};
const ProjectsList = () => {
	const { projectsArr, searchQuery } = useSelector(s => s.swagger);
	return (
		<List component="nav">
			{projectsArr.map(project => {
				return (
					<ProjectsListItem
						id={project.id}
						name={project.name}
						requests={project.requests}
						key={project.id}
					/>
				);
			})}
		</List>
	);
};

const ProjectsBar = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setProjectsArr(MOCK_PROJECTS));
	}, []);
	return (
		<Box
			sx={{
				width: "250px",
				borderRight: "1px solid #ddd",
				pt: "15px",
				pb: "15px",
			}}
		>
			<ProjectsSearch />
			<ProjectsList />
		</Box>
	);
};

export default ProjectsBar;
