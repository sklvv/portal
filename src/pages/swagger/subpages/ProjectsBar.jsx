import React, { useEffect, useState } from "react";
import {
	List,
	ListItemText,
	Divider,
	Box,
	ListItemButton,
	Autocomplete,
	TextField,
	Button,
	IconButton,
	Tooltip,
	Modal,
	MenuItem,
	Typography,
	Dialog,
	DialogTitle,
	DialogContent,
} from "@mui/material";
import { Add, ArrowDropDown, Remove } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
	setIsModalOpen,
	setProjectsArr,
	setSelectedProjectId,
	setSelectedRequestId,
} from "../swagger.slice";
import { useTheme } from "../../../hook/useTheme";

const MOCK_PROJECTS = [
	{
		id: "1",
		name: "Project One",
		requests: [
			{
				id: "1",
				projectId: "1",
				name: "Get Users",
				url: "/api/users",
				type: "GET",
				description: "Retrieve all users",
				params: [{ name: "limit", description: "Limit the number of users" }],
				output: "JSON",
			},
			{
				id: "2",
				projectId: "1",
				name: "Create User",
				url: "/api/users",
				type: "POST",
				description: "Create a new user",
				body: '{"name": "string", "email": "string"}',
				output: "JSON",
			},
			{
				id: "3",
				projectId: "1",
				name: "Update User",
				url: "/api/users/{id}",
				type: "PUT",
				description: "Update an existing user",
				params: [{ name: "id", description: "User ID" }],
				body: '{"name": "string", "email": "string"}',
				output: "JSON",
			},
		],
	},
	{
		id: "2",
		name: "Project Two",
		requests: [
			{
				id: "4",
				projectId: "2",
				name: "Get Products",
				url: "/api/products",
				type: "GET",
				description: "Retrieve all products",
				params: [{ name: "category", description: "Product category" }],
				output: "JSON",
			},
			{
				id: "5",
				projectId: "2",
				name: "Create Product",
				url: "/api/products",
				type: "POST",
				description: "Create a new product",
				body: '{"name": "string", "price": "number"}',
				output: "JSON",
			},
			{
				id: "6",
				projectId: "2",
				name: "Delete Product",
				url: "/api/products/{id}",
				type: "DELETE",
				description: "Delete an existing product",
				params: [{ name: "id", description: "Product ID" }],
				output: "JSON",
			},
		],
	},
	{
		id: "3",
		name: "Project Three",
		requests: [
			{
				id: "7",
				projectId: "3",
				name: "Get Orders",
				url: "/api/orders",
				type: "GET",
				description: "Retrieve all orders",
				params: [{ name: "status", description: "Order status" }],
				output: "JSON",
			},
			{
				id: "8",
				projectId: "3",
				name: "Create Order",
				url: "/api/orders",
				type: "POST",
				description: "Create a new order",
				body: '{"productId": "string", "quantity": "number"}',
				output: "JSON",
			},
			{
				id: "9",
				projectId: "3",
				name: "Update Order",
				url: "/api/orders/{id}",
				type: "PUT",
				description: "Update an existing order",
				params: [{ name: "id", description: "Order ID" }],
				body: '{"status": "string"}',
				output: "JSON",
			},
		],
	},
	{
		id: "4",
		name: "Project Four",
		requests: [
			{
				id: "10",
				projectId: "4",
				name: "Get Customers",
				url: "/api/customers",
				type: "GET",
				description: "Retrieve all customers",
				params: [{ name: "region", description: "Customer region" }],
				output: "JSON",
			},
			{
				id: "11",
				projectId: "4",
				name: "Create Customer",
				url: "/api/customers",
				type: "POST",
				description: "Create a new customer",
				body: '{"name": "string", "contact": "string"}',
				output: "JSON",
			},
			{
				id: "12",
				projectId: "4",
				name: "Delete Customer",
				url: "/api/customers/{id}",
				type: "DELETE",
				description: "Delete an existing customer",
				params: [{ name: "id", description: "Customer ID" }],
				output: "JSON",
			},
		],
	},
	{
		id: "5",
		name: "Project Five",
		requests: [
			{
				id: "13",
				projectId: "5",
				name: "Get Invoices",
				url: "/api/invoices",
				type: "GET",
				description: "Retrieve all invoices",
				params: [{ name: "month", description: "Invoice month" }],
				output: "JSON",
			},
			{
				id: "14",
				projectId: "5",
				name: "Create Invoice",
				url: "/api/invoices",
				type: "POST",
				description: "Create a new invoice",
				body: '{"customerId": "string", "amount": "number"}',
				output: "JSON",
			},
			{
				id: "15",
				projectId: "5",
				name: "Update Invoice",
				url: "/api/invoices/{id}",
				type: "PUT",
				description: "Update an existing invoice",
				params: [{ name: "id", description: "Invoice ID" }],
				body: '{"status": "string"}',
				output: "JSON",
			},
		],
	},
];
const ModalForm = () => {
	const { isModalOpen, projectsArr } = useSelector(s => s.swagger);
	const dispatch = useDispatch();
	const neonGreen = useTheme("neonGreen");

	const [formType, setFormType] = useState("project");
	const [projectName, setProjectName] = useState("");
	const [requestData, setRequestData] = useState({
		name: "",
		url: "",
		type: "GET",
		params: [{ name: "", description: "" }],
		description: "",
		output: "",
		body: "",
	});

	const handleRequestChange = e => {
		const { name, value } = e.target;
		setRequestData(prev => ({ ...prev, [name]: value }));
	};

	const handleParamChange = (index, e) => {
		const { name, value } = e.target;
		const newParams = [...requestData.params];
		newParams[index][name] = value;
		setRequestData(prev => ({ ...prev, params: newParams }));
	};

	const addParam = () => {
		setRequestData(prev => ({
			...prev,
			params: [...prev.params, { name: "", description: "" }],
		}));
	};

	const removeParam = index => {
		const newParams = requestData.params.filter((_, i) => i !== index);
		setRequestData(prev => ({ ...prev, params: newParams }));
	};

	return (
		<Dialog open={isModalOpen} onClose={() => dispatch(setIsModalOpen(false))}>
			<DialogTitle>
				Создать {formType === "project" ? "проект" : "запрос"}
			</DialogTitle>
			<DialogContent sx={{ pt: "5px !important" }}>
				<TextField
					select
					label="Создать"
					value={formType}
					onChange={e => setFormType(e.target.value)}
					fullWidth
				>
					<MenuItem value="project">Проект</MenuItem>
					<MenuItem value="request">Запрос</MenuItem>
				</TextField>
				{formType === "project" ? (
					<TextField
						label="Название проекта"
						value={projectName}
						onChange={e => setProjectName(e.target.value)}
						fullWidth
						margin="normal"
					/>
				) : (
					<>
						<Autocomplete
							sx={{ flexGrow: 1, mt: "10px" }}
							options={projectsArr}
							renderInput={params => <TextField {...params} label="Проект" />}
							getOptionLabel={option => option.name}
							onChange={(e, value) => {
								if (value && value.id) {
									// dispatch(setSelectedRequestId(value.id));
									// dispatch(setSelectedProjectId(value.projectId));
								}
							}}
						/>
						<TextField
							label="Название запроса"
							name="name"
							value={requestData.name}
							onChange={handleRequestChange}
							fullWidth
							margin="normal"
						/>
						<TextField
							label="URL"
							name="url"
							value={requestData.url}
							onChange={handleRequestChange}
							fullWidth
							margin="normal"
						/>
						<TextField
							select
							label="Тип"
							name="type"
							value={requestData.type}
							onChange={handleRequestChange}
							fullWidth
							margin="normal"
						>
							<MenuItem value="GET">GET</MenuItem>
							<MenuItem value="POST">POST</MenuItem>
							<MenuItem value="PUT">PUT</MenuItem>
							<MenuItem value="DELETE">DELETE</MenuItem>
						</TextField>
						{requestData.params.map((param, index) => (
							<Box key={index} sx={{ display: "flex", gap: 1, mb: 1 }}>
								<TextField
									label="Параметр"
									name="name"
									value={param.name}
									onChange={e => handleParamChange(index, e)}
									fullWidth
								/>
								<TextField
									label="Описание"
									name="description"
									value={param.description}
									onChange={e => handleParamChange(index, e)}
									fullWidth
								/>
								<IconButton onClick={() => removeParam(index)}>
									<Tooltip title="Удалить">
										<Remove />
									</Tooltip>
								</IconButton>
							</Box>
						))}
						<Button
							onClick={addParam}
							// color="#4cb242"
							sx={{ color: neonGreen }}
						>
							Добавить параметр
						</Button>
						<TextField
							label="Описание"
							name="description"
							value={requestData.description}
							onChange={handleRequestChange}
							fullWidth
							margin="normal"
						/>
						<TextField
							label="Ответ"
							name="output"
							value={requestData.output}
							onChange={handleRequestChange}
							fullWidth
							margin="normal"
						/>
						<TextField
							label="Тело запроса"
							name="body"
							value={requestData.body}
							onChange={handleRequestChange}
							fullWidth
							margin="normal"
						/>
					</>
				)}
				<Button
					variant="contained"
					sx={{ mt: "5px", backgroundColor: neonGreen, width: "100%" }}
				>
					Создать
				</Button>
			</DialogContent>
		</Dialog>
	);
};
const ProjectsSearch = () => {
	const { projectsArr } = useSelector(s => s.swagger);
	const allRequestsArr = projectsArr.flatMap(el => el.requests);
	const dispatch = useDispatch();

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
			}}
		>
			<Autocomplete
				sx={{ flexGrow: 1 }}
				options={allRequestsArr}
				renderInput={params => (
					<TextField {...params} label="Поиск по запросам" size="small" />
				)}
				getOptionLabel={option => option.name}
				onChange={(e, value) => {
					if (value && value.id) {
						dispatch(setSelectedRequestId(value.id));
						dispatch(setSelectedProjectId(value.projectId));
					}
				}}
			/>
			<IconButton size="small" onClick={() => dispatch(setIsModalOpen(true))}>
				<Tooltip title="Создать">
					<Add />
				</Tooltip>
			</IconButton>
		</Box>
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
	const { projectsArr } = useSelector(s => s.swagger);
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
				width: "300px",
				borderRight: "1px solid #ddd",
				pt: "15px",
				pb: "15px",
			}}
		>
			<ProjectsSearch />
			<ProjectsList />
			<ModalForm />
		</Box>
	);
};

export default ProjectsBar;
