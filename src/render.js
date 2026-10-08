import { createIcons, icons } from 'lucide';

export function renderToDos(arr) {
    const liString = arr.map(obj =>
        `
        <li class="justify-between inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-layer border border-layer-line text-layer-foreground -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
            <i onclick="handleUpdate(${obj.id})" class="cursor-pointer ${obj.done ? "text-green-500" : "tetx-gray-500"}" data-lucide="circle-check"></i>
            <span class="${obj.done ? "line-through" : ""}">${obj.name}</span>
            <i onclick="handleDelete(${obj.id})" class="cursor-pointer text-red-500" data-lucide="trash"></i>
        </li>
        `).join("");
    document.querySelector(".lista").innerHTML = liString;
    createIcons({ icons });
}