"""Clean a messy leads/contacts CSV: trim spaces, lowercase emails,
standardize phones, drop duplicates, and save a new file.
Code to Ship, Module 9. Your original file is never changed.

Run in Google Colab: upload leads.csv with the folder icon, paste this, run.
"""
import re
import pandas as pd

df = pd.read_csv("leads.csv")
print("Rows before:", len(df))

# Trim stray spaces in every text column
for col in df.select_dtypes(include="object"):
    df[col] = df[col].str.strip()

if "email" in df.columns:
    df["email"] = df["email"].str.lower()

if "phone" in df.columns:
    def tidy(p):
        digits = re.sub(r"\D", "", str(p))[-10:]
        return f"({digits[:3]}) {digits[3:6]}-{digits[6:]}" if len(digits) == 10 else ""
    df["phone"] = df["phone"].apply(tidy)

key = "email" if "email" in df.columns else df.columns[0]
df = df.drop_duplicates(subset=key)

df.to_csv("leads_clean.csv", index=False)
print("Rows after:", len(df), "-> saved leads_clean.csv")
