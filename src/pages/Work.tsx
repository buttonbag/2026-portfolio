import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import WorkData from "../components/Work"
import { Box, Typography } from "@mui/material";

function Work() {
  return (
		<Box sx={{py:8}}>
			<CssBaseline />
			<div className="max-w-4xl mx-auto">
				{/* Header */}
				<div className="mb-12 pb-8 border-b border-black">
					<Typography variant="h1">
						Work
					</Typography>
				</div>

				{/* Professional Projects */}
				<Box component="section" sx={{my:12}}>
					<Typography variant="h2">
						Professional Projects
					</Typography>
					
					<Grid container direction="row" spacing={{ xs: 2, md: 3 }}>
						<WorkData />
					</Grid>
				</Box>

				{/* Video Presentations */}
				<section className="mb-16">
					<Typography variant="h2">
						Video Presentations
					</Typography>

					<div className="space-y-12">
						{/* Video 1 */}
						<div>
							<h3 className="text-xl font-medium mb-4">
								Talk: Modern Web Development Practices
							</h3>
							<div className="relative pb-[56.25%] h-0 overflow-hidden border border-gray-300">
								<iframe
									className="absolute top-0 left-0 w-full h-full"
									src="https://www.youtube.com/embed/dQw4w9WgXcQ"
									title="Modern Web Development Practices"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								/>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Box>
	);
}


export default Work