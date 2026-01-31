/**
 * Certificate Automation using Google Workspace
 * ---------------------------------------------
 * Data Source  : Google Sheets
 * Template     : Google Slides
 * Output       : PDF saved to Google Drive
 * Filename     : Name (Roll).pdf
 */

function generateCertificates() {
  // 🔁 REPLACE THESE WITH YOUR OWN IDs
  const sheetId = "YOUR_GOOGLE_SHEET_ID";
  const folderId = "YOUR_DRIVE_FOLDER_ID";
  const templateId = "YOUR_SLIDES_TEMPLATE_ID";

  const sheet = SpreadsheetApp.openById(sheetId).getSheets()[0];
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {

    // Column C → Status
    if (data[i][2] === "DONE") continue;

    const name = data[i][0];   // Column A → Name
    const roll = data[i][1];   // Column B → Roll Number

    if (!name || !roll) continue;

    // Make filename safe
    const safeRoll = roll.toString().replace(/[\/\\:?*"<>|]/g, "-");

    // Make a copy of the Slides template
    const copy = DriveApp.getFileById(templateId)
      .makeCopy(`${name} (${safeRoll})`);

    // Replace placeholders in Slides
    const pres = SlidesApp.openById(copy.getId());
    const slide = pres.getSlides()[0];

    slide.replaceAllText("{{NAME}}", name);
    slide.replaceAllText("{{ROLL}}", roll);

    pres.saveAndClose();

    // Prevent Google backend glitches
    Utilities.sleep(1000);

    // Export as PDF and save to Drive
    const pdf = DriveApp.getFileById(copy.getId()).getAs(MimeType.PDF);
    DriveApp.getFolderById(folderId)
      .createFile(pdf)
      .setName(`${name} (${safeRoll}).pdf`);

    // Mark as DONE in Column C
    sheet.getRange(i + 1, 3).setValue("DONE");
  }
}
