export const metaData = {
    title: "Регистрация | LALAMBADA",
    description: "Создайте аккаунт, чтобы получить доступ к эксклюзивным возможностям.",
    robots: "noindex, nofollow",
}

export default function LoginLayout({
    children,
}) {
    return (
        <main className="min-h-screen text-black bg-gray-200 p-3 flex items-center flex-col justify-center">
            {children}
        </main>
    );
}
