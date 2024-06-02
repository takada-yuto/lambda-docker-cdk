export const lambdaHandler = async (event: any, context: any) => {
  console.log("Hello lambda")
  return {
    statusCode: 200,
    body: JSON.stringify({
      key: "value",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
};
