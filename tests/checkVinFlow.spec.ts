import { test, expect } from '@playwright/test';

test('qa homework task testing car vertical main flow', async ({ page }) => {
    //navigate to the car vertical page
    await page.goto('https://www.carvertical.com');
    //Accept cookies
    await page.locator('[data-testid="BisquitsBanner-acceptAllButton"]').click();
    //Approve location
    await page.locator("#react-aria-modal-dialog > div > div > div.SuggestCorrectMarket_actions__GkNyd > div.MarketSelectionButton_root__u709_.MarketSelectionButton_stylized__4DNnR.MarketSelectionButton_large__ekAeJ > div:nth-child(2) > div.MarketSelectionButton_languages__j97G5 > a.MarketSelectionButton_languageSelection__H0HjW.MarketSelectionButton_primary__zyYKr")
        .click();
    //enter vin
    await page.locator(
        ".CallToActionSection_form__bZCAT > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > input:nth-child(2)")
        .type("SALLAAA146A396339");
    //Gauti ataskaitą
    await page.locator(
        ".CallToActionSection_form__bZCAT > form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1)")
        .click();
    //Gauti ataskaitą option
    await page.locator('[class*="UserSegmentQuestion_form"] > label:nth-child(3) > span').click();
    //Toliau
    await page.locator("form > button").click();
    //checkbox mark
    await page.locator('[class*="PricingSection"] > label:nth-child(1)').click();
    //Gauti ataskaitą
    await page.locator('[class*="PricingSection_button"]').click();
    //Pritaikyti nuolaidą
    await page.locator('[data-testid="VoucherField-expandButton"]').click();
    //Enter voucher
    await page.getByPlaceholder("Kupono kodas").type("qahomework");
    //Use the voucher
    await page.locator('[data-testid="VoucherField-addVoucherButton"]').click();
    //check notification
    await expect(page.locator('[class*="TextInput_stateText"]')).toHaveText('Geros naujienos! Pridėjome qahomework kuponą prie jūsų užsakymo.');
    //check initial price
    await expect(page.locator('[class*="CheckoutReportBlock_root"] > div:nth-child(3) > p > span')).toHaveText('19.79 €');
    //check voucher
    await expect(page.locator('[class*="CheckoutVoucherBlock_root"] > button > span')).toHaveText('-1%');
    //check total price
    await expect(page.locator('[class*="CheckoutTotalAmount"] > div > p > span')).toHaveText('19.78 €');
});