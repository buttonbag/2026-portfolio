import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import work from "../content/work";
import { Link } from 'react-router';
import CardActionArea from "@mui/material/CardActionArea";
import { Typography } from "@mui/material";

function WorkData() {
  return (
    <>
    {work.map((w) => (
      <Grid size={{ xs: 12, sm:6, md: 4 }} key={w.id}>
        <Link to={"/work/"+w.id}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography variant="body1" className="text-xl font-medium mb-2">{w.name}</Typography>
              <p className="text-sm text-gray-600 mb-3">
                {w.date} 
              </p>
              <Stack direction="row" spacing={1}>
                {w.tech_stack.map( (tech) => 
                  <Chip variant="outlined" sx={{color: "yellow", border: ".9 solid"}} size="small" label={tech}/> 
                )}
              </Stack>
              <div className="border border-gray-300 aspect-video flex items-center justify-center bg-gray-50">
                <span className="text-sm text-gray-500">
                  Project Image
                </span>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>
      </Grid>
    ))}
    </>
  )
}

export default WorkData;