window.onload = function () {
  document.body.classList.remove('is-preload');
};
window.ontouchmove = function () {
  return false;
};
window.onorientationchange = function () {
  document.body.scrollTop = 0;
};

//counter section
document.addEventListener('DOMContentLoaded', function () {
  // Retrieve the current count from localStorage
  let count = localStorage.getItem('visitsCount');

  // Check if count exists in localStorage
  if (count === null) {
    // If not, initialize count to 0
    count = 0;
  } else {
    // If it exists, parse the count to an integer
    count = parseInt(count);
  }

  // Update the counter display
  document.getElementById('visitsCount').textContent = count;

  // Increment the count
  count++;

  // Update localStorage with the new count
  localStorage.setItem('visitsCount', count);
});

// Lambda Function URL
fetch('https://dfwys2pz2c2m54eg5wjl2s6xxq0lamzm.lambda-url.us-east-2.on.aws/')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // You can add further processing here if needed
    return response.json();
  })
  .then((data) => {
    console.log(data); // Handle the response data as needed
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });
