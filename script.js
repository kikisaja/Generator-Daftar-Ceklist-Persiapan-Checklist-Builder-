// --- STATE APLIKASI (DEFAULT TRAVEL ITEMS) ---
let checklist = [
    { id: 1, text: "Paspor & Tiket Penerbangan ✈️", checked: true },
    { id: 2, text: "Pakaian Ganti & Jaket 🧥", checked: false },
    { id: 3, text: "Pengisi Daya / Powerbank 🔋", checked: false },
    { id: 4, text: "Obat-Pribadi & P3K 💊", checked: false },
    { id: 5, text: "Dompet & Kartu Identitas 💳", checked: true }
];

// --- AMBIL ELEMEN DOM ---
const checklistForm = document.getElementById("checklist-form");
const newItemInput = document.getElementById("new-item-input");
const checklistItemsContainer = document.getElementById("checklist-items");
const progressText = document.getElementById("progress-text");
const progressPercentage = document.getElementById("progress-percentage");
const progressFill = document.getElementById("progress-fill");
const resetBtn = document.getElementById("reset-btn");
const clearCheckedBtn = document.getElementById("clear-checked-btn");

// --- FUNGSI RENDER CEKLIST & PROGRES ---
function renderChecklist() {
    checklistItemsContainer.innerHTML = "";

    const totalItems = checklist.length;
    const checkedItems = checklist.filter((item) => item.checked).length;
    const percentage = totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;

    // Update Progress Bar UI
    progressText.textContent = `${checkedItems} dari ${totalItems} selesai`;
    progressPercentage.textContent = `${percentage}%`;
    progressFill.style.width = `${percentage}%`;

    if (totalItems === 0) {
        checklistItemsContainer.innerHTML = `<p style="text-align:center; font-size:0.8rem; font-weight:700; color:#64748b; padding:12px;">Daftar masih kosong. Yuk tambah item!</p>`;
        return;
    }

    // Render Item List
    checklist.forEach((item) => {
        const li = document.createElement("li");
        li.className = `checklist-item ${item.checked ? "checked" : ""}`;

        li.innerHTML = `
            <label class="item-content">
                <input type="checkbox" ${item.checked ? "checked" : ""} data-id="${item.id}">
                <span class="item-text">${item.text}</span>
            </label>
            <button class="btn-delete" data-id="${item.id}" title="Hapus Item">❌</button>
        `;

        checklistItemsContainer.appendChild(li);
    });

    // Event listener untuk checkbox centang
    document.querySelectorAll(".checklist-item input[type='checkbox']").forEach((checkbox) => {
        checkbox.addEventListener("change", (e) => {
            const id = parseInt(e.target.getAttribute("data-id"));
            toggleItem(id);
        });
    });

    // Event listener untuk tombol hapus item satuan
    document.querySelectorAll(".btn-delete").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const id = parseInt(e.target.getAttribute("data-id"));
            deleteItem(id);
        });
    });
}

// --- FUNGSI AKSI STATE ---
function toggleItem(id) {
    checklist = checklist.map((item) => {
        if (item.id === id) {
            return { ...item, checked: !item.checked };
        }
        return item;
    });
    renderChecklist();
}

function deleteItem(id) {
    checklist = checklist.filter((item) => item.id !== id);
    renderChecklist();
}

// --- EVENT LISTENERS UTAMA ---
checklistForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = newItemInput.value.trim();

    if (!text) return;

    const newItem = {
        id: Date.now(),
        text: text,
        checked: false
    };

    checklist.push(newItem);
    newItemInput.value = "";
    renderChecklist();
});

resetBtn.addEventListener("click", () => {
    if (confirm("Reset seluruh status centang?")) {
        checklist = checklist.map((item) => ({ ...item, checked: false }));
        renderChecklist();
    }
});

clearCheckedBtn.addEventListener("click", () => {
    if (confirm("Hapus semua item yang sudah dicentang selesai?")) {
        checklist = checklist.filter((item) => !item.checked);
        renderChecklist();
    }
});

// Inisialisasi awal
renderChecklist();
