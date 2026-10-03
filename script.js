const businessData = {
    chef: {
        subtitle: "THE CHEF BY RICO",
        fbPageName: "The Chef by Rico",
        fbUrl: "https://www.facebook.com/profile.php?id=61594459323090", // Palitan ng totoong link kung gusto mo
        footer: "Shine. Protect. Impress."
    },
    kahts: {
        subtitle: "KAHT'S PROPERTIES",
        fbPageName: "Kaht's Properties",
        fbUrl: "https://www.facebook.com/maricar.buhay", // Palitan ng totoong link kung gusto mo
        footer: "Kaht's Properties"
    }
};

function switchBusiness(type) {
    const data = businessData[type];
    
    // Palitan ang active buttons
    document.getElementById('btnChef').classList.toggle('active', type === 'chef');
    document.getElementById('btnKahts').classList.toggle('active', type === 'kahts');

    // Baguhin ang header at Facebook details
    document.getElementById('businessSubtitle').innerText = data.subtitle;
    document.getElementById('fbPageText').innerText = data.fbPageName;
    document.getElementById('fbPageLink').href = data.fbUrl;
    document.getElementById('footerNote').innerText = data.footer;
}

// vCard Save Contact Handler
document.getElementById('saveContactBtn').addEventListener('click', function(e) {
    e.preventDefault();
    
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Maricar Buhay
TITLE:Entrepreneur / Owner
TEL;TYPE=WORK,VOICE:09626244520
EMAIL;TYPE=WORK:buhaymaricar10@gmail.com
END:VCARD`;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        const encodedVCard = encodeURIComponent(vcardData);
        window.location.href = `data:text/vcard;charset=utf-8,${encodedVCard}`;
    } else {
        const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Maricar_Buhay_Contact.vcf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }
});

// Email Link Click Handler
document.getElementById('emailLink').addEventListener('click', function(e) {
    e.preventDefault();
    const email = "buhaymaricar10@gmail.com";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Inquiry`;
    window.location.href = `mailto:${email}?subject=Inquiry`;
    
    setTimeout(function() {
        window.open(gmailUrl, '_blank');
    }, 500);
});
// Viber Click Handler para hindi mapanis kung walang app
function handleViberClick(e) {
    // Kung gusto mong subukang buksan ang app
    const phoneNumber = "+639626244520";
    const viberAppUrl = `viber://chat?number=${encodeURIComponent(phoneNumber)}`;
    
    // Subukang buksan ang Viber app
    window.location.href = viberAppUrl;
    
    // Kung walang nangyari (halimbawa nasa laptop ka o walang Viber), 
    // pwedeng maglagay ng fallback o hayaan itong mag-open.
}