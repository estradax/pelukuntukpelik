import { NextRequest, NextResponse } from "next/server";

type SendRequestBody = {
  story: string;
  location: string;
  timeframe: string;
  contactConsent: boolean;
  supportNeeded: boolean;
};

export async function POST(request: NextRequest) {
  const data = (await request.json()) as SendRequestBody;
  const formData = new FormData();
  formData.append("target", "6285779248283");
  formData.append(
    "message",
    `
Kejadian:
${data.story}

Lokasi:
${data.location}

Waktu:
${data.timeframe}
`
  );

  await fetch("https://api.fonnte.com/send", {
    method: "POST",
    body: formData,
    headers: {
      Authorization: "LbTqmmpeErsuJ9Ye3irp",
    },
  });

  return NextResponse.json({ message: "Message sent" });
}
