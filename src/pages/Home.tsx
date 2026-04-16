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
						Your Name
					</Typography>

					<div className="flex flex-wrap gap-x-6 gap-y-1 text-sm mt-4">
							<span>linkedin.com/in/yourname</span>
					</div>
				</header>

				{/* Profile */}
				<Box component="section" sx={{my:12}}>
					<Typography variant="h2">
						Profile
					</Typography>
					<p className="text-base leading-relaxed max-w-3xl">
						Brief professional summary highlighting your key strengths,
						experience, and career objectives. Keep this concise and
						impactful—two to three sentences maximum.
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

				{/* Education */}
				<Box component="section" sx={{my:12}}>
					<Typography variant="h2">
						Education
					</Typography>
					<div className="grid grid-cols-12 gap-x-8">
						<div className="col-span-12 md:col-span-3">
							<p className="text-sm text-gray-600">2010—2014</p>
						</div>
						<div className="col-span-12 md:col-span-9">
							<h3 className="font-medium mb-1">
								Bachelor of Science in Computer Science
							</h3>
							<p className="text-sm text-gray-600">University Name</p>
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
									JavaScript, TypeScript, React, Node.js, Python, SQL, Git, AWS
								</p>
							</div>
						</div>
						<div className="grid grid-cols-12 gap-x-8">
							<div className="col-span-12 md:col-span-3">
								<h3 className="text-sm font-medium">Languages</h3>
							</div>
							<div className="col-span-12 md:col-span-9">
								<p className="text-sm leading-relaxed">
									English (Native), Spanish (Professional)
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