export const getLastSiteUpdatedOn = async () => {
  var deploymentId = 0;
  const data = await fetch("https://api.vercel.com/v6/deployments", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERCEL_API_KEY}`,
    },
  }).then((dp) =>
    dp.json().then((dp) => {
      deploymentId = dp.deployments.filter(
        (dp: any) => dp.name == "maheshthedev-me" && dp.target == "production"
      )[0].uid;
    })
  );

  const result = await fetch(
    `https://api.vercel.com/v13/deployments/${deploymentId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.VERCEL_API_KEY}`,
      },
    }
  );

  const { ready } = await result.json();
  const lastDeployedTime = new Date(ready).toDateString();

  return lastDeployedTime;
};
