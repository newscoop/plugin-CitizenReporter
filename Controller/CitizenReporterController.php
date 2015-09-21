<?php

/**
 * @author Rafał Muszyński <rafal.muszynski@sourcefabric.org>
 * @copyright 2015 Sourcefabric z.ú.
 * @license http://www.gnu.org/licenses/gpl-3.0.txt
 */
namespace Newscoop\CitizenReporterPluginBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

/**
 * Route("/citizenreporter").
 */
class CitizenReporterController extends Controller
{
    /**
     * @Route("/citizen-reporter/")
     */
    public function indexAction()
    {
        return $this->render('NewscoopCitizenReporterPluginBundle:CitizenReporter:index.html.twig');
    }
}
