import JsPDF from "jspdf";
import html2canvas from "html2canvas";

//handle export
export const handleExport = async () => {
  //stage
  const stageElement = document.getElementById("mainStage");

  const stage = await html2canvas(stageElement, {});
  // Create a new PDF object.
  const pdf = new JsPDF({ unit: "in", orientation: "landscape" });
  pdf.addPage("a4", "p");

  // Add the canvas to the PDF.
  pdf.addImage(stage, "png", 0, 0, 11.69, 8.26);

  // Save the PDF.
  pdf.save("pdf-name.pdf");
};
