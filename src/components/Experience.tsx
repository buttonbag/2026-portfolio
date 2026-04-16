import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import experience from "../content/experience"
import { Chip, Typography } from "@mui/material";

function Experience() {
  return (
    <>
    {experience.map((e) => (
      <Grid size={{ sm: 12, md: 4 }} key={e.id}>
        <Card>
          <CardContent>
              <Chip variant="outlined" size="small" label={e.date}/>
            <div className="col-span-12 md:col-span-9">
              <Typography variant="h4">{e.title}</Typography>
              <Typography variant="body1">{e.company}</Typography>
              <ul className="text-sm leading-relaxed">
                {(e.bullet).map((item)=>(
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </Grid>
    ))}
    </>
  )
}

export default Experience;