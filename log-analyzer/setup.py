import setuptools

from distutils.core import setup

with open('requirements.txt') as f:
    requirements = f.read().splitlines()

setup(
    name='mahjong-soul-log-analyzer',
    packages=[],
    version='0.0.1',
    description='Python script to analyze game log',
    long_description='',
    author='Sanggu Han',
    author_email='korean139@gmail.com',
    url='https://github.com/KOREAN139/syssec-leaderboard/log-analyzer',
    install_requires=requirements,
    classifiers=[
        'Development Status :: 5 - Production/Stable',
        'Environment :: Console',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
        'Programming Language :: Python :: 3.9',
    ],
)
