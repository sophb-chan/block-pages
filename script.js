const mirrors = document.querySelectorAll('.mirror-list a[href]');

for (const mirrorLink of mirrors) {
	if (new URL(mirrorLink.href).hostname === location.hostname)
		mirrorLink.textContent += ' (You are here!)';
}
