<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    #[Route('/api/helloword/{name}', name: 'api_helloword')]
    public function apiHelloword(string $name): Response
    {
        return new JsonResponse('hello ' . $name);
    }

    #[Route('/{slug?}', name: 'app', requirements: ['slug' => '.+'], priority: -1)]
    public function app(): Response
    {
        return $this->render('app.html.twig');
    }
}