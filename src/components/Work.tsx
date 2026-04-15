import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import work from "../content/work";
import { Link } from 'react-router';

function WorkData() {
  return (
    <>
    {work.map((w) => (
      <Grid size={{ sm: 12, md: 4 }} key={w.id}>
        <Link to={"/work/"+w.id}>
        <Card >
          {/* <CardActionArea> */}
            <CardContent>
              <h3 className="text-xl font-medium mb-2">{w.name}</h3>
              <p className="text-sm text-gray-600 mb-3">
                {w.date} 
              </p>
                {w.tech_stack}
              <div className="border border-gray-300 aspect-video flex items-center justify-center bg-gray-50">
                <span className="text-sm text-gray-500">
                  Project Image
                </span>
              </div>
            </CardContent>
          {/* </CardActionArea> */}
        </Card>
        </Link>
      </Grid>
    ))}
    </>
  )
}

export default WorkData;