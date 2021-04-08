// Use it with caution, Twitter may detect suspicious behavior and suspend your account.
(() => {
  let i = 0;
  let toFollow = 10;
  let newFollowed = 0;
  const followInterval = setInterval(() => {
    if (i >= `${toFollow}`) {
      clearInterval(followInterval);
      return;
    }
    const buttons = Array.from(
      document.querySelectorAll('[data-testid*="follow"]')
    );
    const nextButton = buttons[i];
    nextButton.click();
    i += 1;

    newFollowed++;
    console.log(`New people I follow: ${newFollowed}`);
  }, 2000);
})();
