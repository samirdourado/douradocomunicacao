import { test, expect } from '@playwright/test';

test('home mostra título e botão de orçamento', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Título errado/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('clientes');
    await expect(
        page.getByRole('button', { name: 'Solicite um orçamento grátis' }),
    ).toBeVisible();
});

test('menu Serviços leva até a seção de serviços', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('navigation').getByRole('link', { name: 'Serviços', exact: true }).click();
    await expect(page).toHaveURL(/#servicos/);
    await expect(
        page.getByRole('heading', { name: 'Entre os nossos serviços' }),
    ).toBeVisible();
});

test('formulário mostra erro com campos vazios', async ({ page }) => {
    await page.goto('/#contato');
    await page.getByRole('button', { name: 'Enviar' }).click();
    await expect(page.getByText('Insira um nome válido')).toBeVisible();
});