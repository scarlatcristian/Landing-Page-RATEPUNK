const apiKey = "$2b$10$9rUAjRwEzM6Vt4Y5vhSJm.9VOdxvjKv/86g1Z1xjrAJpXueaP74L.";
const binId = "6484bc908e4aa6225eac3be5";

const saveEmail = async (email) => {
  let req = new XMLHttpRequest();

  req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
      console.log(req.responseText);
    }
  };

  req.open("PUT", `https://api.jsonbin.io/v3/b/${binId}`, true);
  req.setRequestHeader("Content-Type", "application/json");
  req.setRequestHeader("X-Master-Key", apiKey);
  req.send(`{"email": "${email}"}`);
};
export default saveEmail;
