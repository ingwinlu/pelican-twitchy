from distutils.core import setup

setup(
    name='pelican-twitchy',
    description='pelican-twitchy is a theme for pelican',
    version='0.1',
    packages=['pelican_twitchy'],
    license='GPLv3',
    author='winlu',
    author_email='derwinlu+pelican-twitchy@gmail.com',
    package_data={
            'pelican_twitchy' : [
                'templates/*.html',
                'static/css/*',
                'static/css/pygments/*',
                'static/fonts/*',
                'static/js/*'
                ]
    },
    requires = [
        'pelican'
    ],
    url='https://github.com/ingwinlu/pelican-twitchy'
)

