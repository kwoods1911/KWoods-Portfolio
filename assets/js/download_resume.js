document.getElementById('downloadButton').addEventListener('click', function(){
    const link = document.createElement('a');
    link.href = 'assets/files/Khari_Woods_Basic_Job_Resume.pdf';
    window.open(link.href, '_blank');
})