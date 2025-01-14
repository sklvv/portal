import { Box } from "@mui/material";
import ProjectsBar from "./subpages/ProjectsBar";
import RequestInfoBox from "./subpages/RequestInfoBox";
import "./swagger.scss";

const Swagger = () => {
	return (
		<Box sx={{ display: "flex", flexDirection: "row" }}>
			<ProjectsBar />
			<RequestInfoBox />
		</Box>
	);
};

export default Swagger;
