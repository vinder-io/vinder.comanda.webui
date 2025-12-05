import { RegisterForm } from "@/application/features/identity/components/register-form";

const styles = {
    wrapper: "flex justify-center items-center min-h-screen bg-background",
    container: "w-full max-w-md p-6",
    header: "text-center mb-8",
    title: "text-3xl font-semibold text-foreground",
    subtitle: "text-muted-foreground mt-2"
};

export default function RegisterPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Criar conta</h1>
                    <p className={styles.subtitle}>Comece criando sua conta de acesso</p>
                </div>
                <RegisterForm />
            </div>
        </div>
    );
}
