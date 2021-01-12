export const normalizeDialog = (dialog: any) => {
    const newDialog:any = [];

    dialog.forEach((item: any, i: number) => {
        if (i === 0 || item.is !== dialog[i - 1].is) {
            newDialog.push({
                type: "message",
                id: `item-message-${item.id}`,
                avatar: item.avatar,
                isReverse: item.is === "my",
                isRemovable: item.is === "my",
                messages: [
                    {
                        text: item.message,
                        status: item.status,
                        id: item.id,
                        date: item.date,
                    },
                ],
            });
        } else {
            const position = newDialog.length - 1;

            newDialog[position] = {
                ...newDialog[position],
                messages: newDialog[position].messages.concat({
                    text: item.message,
                    status: item.status,
                    id: item.id,
                    date: item.date,
                }),
            };
        }
    });

    return newDialog;
};