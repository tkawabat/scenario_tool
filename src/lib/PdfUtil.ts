import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class PdfUtil {

    public convertText = async (buffer: ArrayBuffer) => {
        pdfjs.getDocument(buffer).promise.then((pdf) => {
            let i = 0;
            for (i = 1; i < pdf.numPages; i++) {
                pdf.getPage(i).then((page) => {
                    page.getTextContent().then((textContent) => {
                        const text = textContent.items.map(item => item.str).join("");
                        // PDFPromiseがawaitで取れないから、setTimeoutで待ってsliceに入れるしかない
                        // 文字化けしたり、改行わからなかったりきつい
                        console.log(text);
                    });
                }).then((text) => text);
            }
        });
    }
}

export default new PdfUtil();