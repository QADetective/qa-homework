# Homework for QA Candidate

## Task #1: write a functional E2E automation test

1. Fork this repository*
2. Run `yarn` to install dependencies
3. Write a test that will:
   1. Visit [carVertical](https://www.carvertical.com)
   2. In the VIN form, submit `SALLAAA146A396339` VIN
   3. Once precheck has loaded, pick 3-report package
   4. On the checkout page, apply `qahomework` voucher
   5. **Validate that the total price is shown correctly**
   6. Share a link to the repository where we can review the test

\* This repo is set up to use [Playwright](https://playwright.dev), but you can use any framework you like. The only requirement is that TypeScript or JavaScript is used.

## Task #2: manually test carVertical app

1. Download carVertical’s [iOS](https://apps.apple.com/lt/app/carvertical-check-car-history/id1528834650) or [Android](https://play.google.com/store/apps/details?id=com.cvmobileapp) app
2. Find at least one bug and/or suggest areas for improvement
3. Report your findings to us

## Task execution: in terminal run "npx playwright test --project=chromium" command