const apiKey = "2eee53d3c0dd564850e8ff5c60b283f9";
const apiToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWVlNTNkM2MwZGQ1NjQ4NTBlOGZmNWM2MGIyODNmOSIsInN1YiI6IjY1MWEwMjExMjIzYThiMDBhYjNjMmVkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wb6BMIjp_lF4wz9KyA_mCHIixsMPV9mOUMCbU4j_e2k";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiToken}`,
  },
};

export default { apiKey, apiToken, options };
