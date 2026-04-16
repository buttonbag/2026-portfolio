import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import WorkData from "../components/Work"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function About() {
  return (
		<Box sx={{py:8}}>
			<CssBaseline />
			<div className="max-w-4xl mx-auto">
				{/* Header */}
				<div className="mb-12 pb-8 border-b border-black">
					<Typography variant="h1">
						About
					</Typography>
				</div>

				{/* Blurb */}
				<Box component="section" sx={{my:12, ml:30}}>
					<Typography sx={{pb:2}}>
						Experienced front-end web developer specializing in designing and building responsive, accessible websites using HTML, CSS, JavaScript, and React. I combine pixel‑perfect UI design with performance optimization and semantic markup to create intuitive user experiences. I collaborate closely with designers and backend engineers to deliver scalable, maintainable web applications.
					</Typography>
					<Typography sx={{pb:2}}>
						I recently completed an intensive full‑stack bootcamp where I built and deployed web apps using Node, Express, React, and PostgreSQL, practiced RESTful API design and testing, and strengthened collaboration through regular pair programming and team projects that mirrored real-world development workflows.
					</Typography>
					<Typography sx={{pb:2}}>
						Previously, I’ve worked across a wide range of environments — from small startups to 
						large companies. Outside of my day-to-day work, I led skill sharing workshops with my peers to help build our knowledgebase. 
						These experiences have shaped how I think about building products that are both well-crafted and widely usable.
					</Typography>
					<Typography sx={{pb:2}}>
						In my spare time, I'm a lifelong learner. You can find me learning woodworking, 
						hanging out with my wife, two cats, and our dog, or enjoying a story-driven, single player, video game.
					</Typography>
				</Box>

			</div>
		</Box>
	);
}


export default About