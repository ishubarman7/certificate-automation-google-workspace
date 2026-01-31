# 🎓 Certificate Automation using Google Workspace

A complete, production-ready system to **automatically generate high-resolution certificates** using  
**Google Slides, Google Sheets, and Google Apps Script**, and export them as **PDFs** with custom file naming.

This project is suitable for:
- Colleges & universities
- Workshops & seminars
- Hackathons & events
- NGOs & training programs

---

## ✨ Key Features

- Bulk certificate generation
- High-resolution, print-ready PDFs
- Google Slides–based certificate template
- Dynamic text replacement (Name, Roll Number)
- Custom PDF naming format: `Name (Roll).pdf`
- Automatic saving to Google Drive
- Status tracking to avoid duplicate generation
- Safe and scalable Google Workspace automation

---

## 🧰 Tech Stack

- **Google Slides** – Certificate design template  
- **Google Sheets** – Participant data source  
- **Google Apps Script** – Automation logic  
- **Google Drive** – PDF storage  

---

## 📂 Project Structure

certificate-automation-google-workspace/
├── Code.gs # Apps Script automation logic
├── appsscript.json # Apps Script configuration
├── README.md # Project documentation
├── assets/
│ └── certificate-template.png
└── sample-data/
└── participants_sample.csv


---

## 📋 Prerequisites

Before starting, ensure you have:
- A Google account
- Basic understanding of Google Sheets & Slides
- Permission to use Google Apps Script
- Google Drive access (Editor permission)

---

## 🗂 Data Source: Google Sheets

### Required Sheet Structure

Your Google Sheet **must** follow this structure:

| Column | Field  | Description |
|------|-------|-------------|
| A | Name | Participant full name |
| B | Roll | Roll number / ID |
| C | Status | Script-managed (`DONE`) |

### Example

Name,Roll,Status
Ishu Barman,21CSE001,
Rahul Kumar,21CSE002,


⚠️ Notes:
- Row 1 must be headers
- Do NOT delete the Status column
- The script updates Status automatically

---

## 🎨 Certificate Template: Google Slides

### Step 1: Create Slides Template
1. Open **Google Slides**
2. Create a blank presentation

---

### Step 2: Set Slide Size (VERY IMPORTANT)

Match slide size to your background image to avoid blur.

Example for **2400 × 1800 px @ 300 DPI**:

- Go to **File → Page setup → Custom**
- Set:
Width : 20.32 cm
Height : 15.24 cm
**or According to your sample certificate size**


---

### Step 3: Add Background
- Go to **Slide → Change background**
- Upload your PNG or PDF background
- Click **Done**

⚠️ Do NOT insert image manually — always use background.

---

### Step 4: Add Placeholders

Insert text boxes with the **exact placeholders**:

{{NAME}}
{{ROLL}}


These will be replaced automatically by the script.

---

## ⚙️ Apps Script Setup

### Step 1: Open Apps Script
- Open your **Google Slides template**
- Go to **Extensions → Apps Script**

---

### Step 2: Add Code
Paste the content of `Code.gs` into the editor.

Replace these placeholders with your real IDs:


const sheetId    = "YOUR_GOOGLE_SHEET_ID";
const folderId   = "YOUR_DRIVE_FOLDER_ID";
const templateId = "YOUR_SLIDES_TEMPLATE_ID";


### Step 3: How to Get IDs
📌 Google Sheet ID
From the URL:https://docs.google.com/spreadsheets/d/SHEET_ID/edit


📌 Google Slides Template ID
From the URL:https://docs.google.com/presentation/d/TEMPLATE_ID/edit


📌 Google Drive Folder ID
From the URL:https://drive.google.com/drive/folders/FOLDER_ID


▶️ Running the Script
In Apps Script, select function:

generateCertificates
Click Run ▶

Grant permissions when prompted:

Google Sheets

Google Slides

Google Drive

📄 Output Behavior
For each row in the Sheet:

Certificate is generated

Placeholders are replaced

PDF is exported

File is saved as:

Name (Roll).pdf
Status column is updated to:

DONE
🔁 Re-Run Safety
Rows marked DONE are skipped

Script can be safely re-run

To regenerate a certificate, remove DONE from that row

### 🛑 Common Errors & Fixes
## ❌ Unexpected error while getting openById
✔ Ensure correct Sheet ID
✔ Grant permissions by running the script once

## ❌ No item with the given ID
✔ Folder or template not accessible
✔ Ensure Editor access
✔ Move files from Shared with me to My Drive

## ❌ Unknown error occurred
✔ Add delay using Utilities.sleep(1000)
✔ Run for fewer rows
✔ Retry after 1–2 minutes

### 🧪 Best Practices
Convert PDF → Slides for best quality

Match slide size to background image

Use text boxes (vector text)

Avoid special characters in roll numbers

Keep real IDs out of public repositories

### 🔒 Security Notes
Never commit real Google IDs to GitHub

Use placeholders in public repos

Do not expose participant data

### 📌 Use Cases
College certificates

Internship certificates

Workshops & seminars

Hackathons

NGO training programs

### 👤 Author
Ishu Barman
Google Workspace Automation | Web & IoT Enthusiast

### 🌱 Future Enhancements
Automatic email delivery

QR code verification

Google Form integration

Multi-page certificates

Retry & progress logging

Admin dashboard

### ⭐ Support If you found this project useful:

⭐ Star the repository

🐛 Report issues

💡 Suggest improvements

