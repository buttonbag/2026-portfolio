import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Experience from "../components/Experience";
import work from "../content/work";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


function Home() {
	
	
	const featured = (WORK_ID:number) => {
		return (
			work.find((w)=>(w.id === WORK_ID))
		);
	};

  return (
		<Box sx={{py:8}}>
			<CssBaseline />
			<div className="max-w-4xl mx-auto">
				{/* Header */}
				<header className="mb-16 pb-8 border-b border-black">
					{/* <h1 className="text-5xl md:text-6xl font-normal tracking-tight mb-4"> */}
					<Typography variant="h1">
						Louie Camacho
					</Typography>

					<div className="flex flex-wrap gap-x-6 gap-y-1 text-sm mt-4">
							<span>linkedin.com/in/louiecamacho</span>
					</div>
				</header>

				{/* Profile */}
				<Box component="section" sx={{my:12}}>
					<Typography variant="h2">
						Profile
					</Typography>
					<p className="text-base leading-relaxed max-w-3xl">
						I'm a front-end web developer who designs and builds responsive, accessible websites using HTML, CSS, JavaScript, and modern frameworks like React; I prioritize clean UI, performance, and user-centered design to deliver polished web experiences.
					</p>
				</Box>

				{/* Experience */}
				<Typography variant="h2">
					Experience
				</Typography>
				<Box component="section" sx={{my:12}}>
					<Grid container spacing={{ xs: 2, md: 3 }}>
						<Experience />
					</Grid>
				</Box>

				{/* Project Highlights */}
				<Box component="section" sx={{my:12}}>
					<Typography variant="h2">
						Project Highlights
					</Typography>
					<div className="">
						<div>
							<Typography variant="h3">{featured(1)?.name}</Typography>
							<p className="text-sm leading-relaxed text-gray-600">
								{featured(1)?.description}
							</p>
						</div>
					</div>
					<div className="">
						<div>
							<Typography variant="h3">{featured(5)?.name}</Typography>
							<p className="text-sm leading-relaxed text-gray-600">
								{featured(5)?.description}
							</p>
						</div>
					</div>
				</Box>

				{/* Skills */}
				<Box component="section" sx={{my:12}}>
					<Typography variant="h2">
						Skills
					</Typography>
					<div className="">
						<div className="grid grid-cols-12 gap-x-8">
							<div className="col-span-12 md:col-span-3">
								<h3 className="text-sm font-medium">Technical</h3>
							</div>
							<div className="col-span-12 md:col-span-9">
								<p className="text-sm leading-relaxed">
									Front-end: React, JavaScript (ES6+), HTML5, CSS3/SCSS, responsive design, accessibility
									Languages / Back-end: Node.js, PostgreSQL, ExpressJS
									Tooling: Git, VSCode, Webpack, NPM 
									Testing & Design: Jest/RTL (familiar), Figma, component-driven development  
									Collaboration: Jira, GitHub workflows, API integration (REST basics)
								</p>
							</div>
						</div>
					</div>
				</Box>
			</div>
		</Box>
	);
}

export default Home