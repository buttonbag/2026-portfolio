import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import work from "../content/work"

export function Work() {
  return (
		<div className="py-8 md:py-16 px-4 md:px-8">
			<div className="max-w-4xl mx-auto">
				{/* Header */}
				<div className="mb-12 pb-8 border-b border-black">
					<h1 className="text-4xl md:text-5xl font-normal tracking-tight">
						Work
					</h1>
				</div>

				{/* Professional Projects */}
				<section className="mb-16">
					<h2 className="text-xs uppercase tracking-widest mb-8 text-gray-600">
						Professional Projects
					</h2>
					
          <CssBaseline />
					<Grid container direction="row" spacing={{ xs: 2, md: 3 }}>
						{work.map((w) => (
							<Grid size={{ sm: 12, md: 4 }}>
								<Card>
									<CardContent>
										<h3 className="text-xl font-medium mb-2">{w.name}</h3>
										<p className="text-sm text-gray-600 mb-3">
											2026 • React 19, TypeScript, React Router 7, Postgres
										</p>
										<p className="mb-6 leading-relaxed">
											Led the complete redesign of a major e-commerce platform
											serving over 1M users. Improved conversion rates by 35%
											and reduced page load times by 50%.
										</p>
										<div className="border border-gray-300 aspect-video flex items-center justify-center bg-gray-50">
											<span className="text-sm text-gray-500">
												Project Image
											</span>
										</div>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</section>

				{/* Video Presentations */}
				<section className="mb-16">
					<h2 className="text-xs uppercase tracking-widest mb-8 text-gray-600">
						Video Presentations
					</h2>

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
		</div>
	);
}


export default Work