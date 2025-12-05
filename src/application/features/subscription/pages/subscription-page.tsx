import { SubscriptionPlanCard } from "@/application/features/subscription/components/subscription-plan-card";

const styles = {
    wrapper: "flex justify-center items-center min-h-screen bg-background",
    container: "w-full max-w-lg p-6",
    header: "text-center mb-8",
    title: "text-3xl font-semibold text-foreground",
    subtitle: "text-muted-foreground mt-2"
};

export default function SubscriptionPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Escolha seu plano</h1>
                    <p className={styles.subtitle}>Comece agora e transforme a gestão do seu estabelecimento</p>
                </div>
                <SubscriptionPlanCard />
            </div>
        </div>
    );
}
