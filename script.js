// NTA - إرسال بيانات الفورم كرسالة جاهزة على واتساب
document.getElementById('orderForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const product = document.getElementById('product').value;
  const area = document.getElementById('area').value.trim();
  const details = document.getElementById('details').value.trim();

  const lines = [
    'السلام عليكم، عايز/ة أطلب من NTA:',
    `الاسم: ${name}`,
    `رقم الموبايل: ${phone}`,
    `نوع القطعة: ${product}`,
    area ? `المنطقة: ${area}` : null,
    details ? `تفاصيل التصميم: ${details}` : null
  ].filter(Boolean);

  const message = encodeURIComponent(lines.join('\n'));
  const whatsappNumber = '201096124670';

  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
});
