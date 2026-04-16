import { Link, useParams } from 'react-router';
import work from "../content/work"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Chip, Stack, Typography } from '@mui/material';


function WorkDetails() {
	const {workId} = useParams();
	const currentWork = work.find(w => w.id === Number(workId));

  return (
		<Box sx={{py:8}}>
			<div className="max-w-4xl mx-auto">
			<Button component={Link} to={"/work"}>&lt; back</Button>
				{/* Header */}
				<div className="mb-12 pb-8 border-b border-black">
						{currentWork?.date} 
					<Typography variant='h1'>
						{currentWork?.name}
					</Typography>
				</div>

				<Box component="section" sx={{my:12, ml:30}}>
					<Stack direction="row" spacing={1}>
						{currentWork?.tech_stack.map( (tech) => 
							<Chip variant="outlined" sx={{color: "yellow", border: ".9 solid"}} size="small" label={tech}/> 
						)}
					</Stack>
					{currentWork?.image}
					<p className="text-xs uppercase tracking-widest mb-8 text-gray-600">
						{currentWork?.description}
					</p>
				</Box>

			</div>
		</Box>
	);
}


export default WorkDetails