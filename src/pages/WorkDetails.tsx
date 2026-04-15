import { Link, useParams } from 'react-router';
import work from "../content/work"
// import { useEffect } from 'react';


function WorkDetails() {
	const {workId} = useParams();
	const currentWork = work.find(w => w.id === Number(workId));

  return (
		<div className="py-8 md:py-16 px-4 md:px-8">
			<div className="max-w-4xl mx-auto">
			<Link to={"/work"}>&lt; back</Link>
				{/* Header */}
				<div className="mb-12 pb-8 border-b border-black">
					<h1 className="text-4xl md:text-5xl font-normal tracking-tight">
						{currentWork?.name}
					</h1>
				</div>

				<section className="mb-16">
						{currentWork?.date} {currentWork?.tech_stack}
						{currentWork?.image}
					<p className="text-xs uppercase tracking-widest mb-8 text-gray-600">
						{currentWork?.description}
					</p>
				</section>

			</div>
		</div>
	);
}


export default WorkDetails