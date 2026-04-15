import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import experience from "../content/experience"

function Experience() {
  return (
    <>
    {experience.map((e) => (
      <Grid size={{ sm: 12, md: 4 }} key={e.id}>
        <Card>
          <CardContent>
            <div className="col-span-12 md:col-span-3">
              <p className="text-sm text-gray-600">{e.date}</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h3 className="font-medium mb-1">{e.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{e.company}</p>
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