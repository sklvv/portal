import { Box, Divider, Tooltip, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useTheme } from "../../../hook/useTheme";
import { ContentCopy } from "@mui/icons-material";

const EmptyRequestText = () => {
	return (
		<Box
			sx={{
				width: "100%",
				height: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Typography
				sx={{
					fontSize: "18px",
					color: useTheme("text"),
				}}
			>
				Выберите запрос из списка
			</Typography>
		</Box>
	);
};
const RequestInfo = () => {
	const { projectsArr, selectedProjectId, selectedRequestId } = useSelector(
		s => s.swagger
	);
	const allRequestsArr = projectsArr.flatMap(el => el.requests);
	const selectedProject =
		projectsArr.find(el => el.id === selectedProjectId) || projectsArr[0];
	const selectedRequest =
		allRequestsArr.find(el => el.id === selectedRequestId) || allRequestsArr[0];
	let typeBadgeColor = useTheme("text");
	switch (selectedRequest.type) {
		case "GET":
			typeBadgeColor = "green";
			break;
		case "POST":
			typeBadgeColor = "#FFDE21";
			break;
		case "DELETE":
			typeBadgeColor = "red";
			break;
		case "PUT":
			typeBadgeColor = "orange";
			break;

		default:
			break;
	}
	return (
		<Box sx={{ p: "10px", height: "100vh" }}>
			<Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
				{selectedProject.name} / {selectedRequest.name}
			</Typography>

			<Box
				sx={{
					mt: "10px",
					mb: "10px",
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					fontSize: "18px",

					border: "1px solid #909090",
					borderRadius: "10px",
					p: "5px",
				}}
			>
				<Box sx={{ display: "flex", flexDirection: "row" }}>
					<Typography
						sx={{
							borderRight: "1px solid #909090",
							pr: "5px",
							mr: "5px",
							color: typeBadgeColor,
						}}
					>
						{selectedRequest.type}
					</Typography>
					<Typography>{selectedRequest.url}</Typography>
				</Box>
				<Tooltip title="Скопировать" sx={{ cursor: "pointer" }}>
					<ContentCopy />
				</Tooltip>
			</Box>

			{selectedRequest.params && (
				// interface IParam {
				// 	name: string;
				// 	description?: string;
				// }
				<>
					<Divider />
					<Box
						sx={{
							mt: "5px",
							mb: "5px",
						}}
					>
						<Typography
							sx={{
								fontSize: "18px",
							}}
						>
							Параметры
						</Typography>
						<Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
							{selectedRequest.params.map(param => {
								return (
									<Box
										sx={{
											display: "flex",
											flexDirection: "row",
											justifyContent: "space-between",
										}}
									>
										<Typography>{param.name}</Typography>
										<Typography>{param.description}</Typography>
									</Box>
								);
							})}
						</Box>
					</Box>
				</>
			)}
			{selectedRequest.output && (
				<>
					<Divider />
					<Box
						sx={{
							mt: "5px",
							mb: "5px",
						}}
					>
						<Typography
							sx={{
								fontSize: "18px",
							}}
						>
							Ответ
						</Typography>
						<Typography>{selectedRequest.output}</Typography>
					</Box>
				</>
			)}
			{selectedRequest.body && (
				<>
					<Divider />
					<Box
						sx={{
							mt: "5px",
							mb: "5px",
						}}
					>
						<Typography
							sx={{
								fontSize: "18px",
							}}
						>
							Тело запроса
						</Typography>
						<Typography>{selectedRequest.body}</Typography>
					</Box>
				</>
			)}
			{selectedRequest.description && (
				<>
					<Divider />
					<Box
						sx={{
							mt: "5px",
							mb: "5px",
						}}
					>
						<Typography
							sx={{
								fontSize: "18px",
							}}
						>
							Описание
						</Typography>
						<Typography>{selectedRequest.description}</Typography>
					</Box>
				</>
			)}
		</Box>
	);
};

const RequestInfoBox = () => {
	const { selectedRequestId } = useSelector(s => s.swagger);
	return (
		<Box
			sx={{
				width: "100%",
			}}
		>
			{selectedRequestId.length === 0 ? <EmptyRequestText /> : <RequestInfo />}
		</Box>
	);
};

export default RequestInfoBox;
